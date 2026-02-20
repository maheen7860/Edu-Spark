import { useState, useEffect, useCallback } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Save, Edit, X } from 'lucide-react';

type NotesProps = {
  courseId: string;
  lessonId: string;
};

const Notes = ({ courseId, lessonId }: NotesProps) => {
  const [notes, setNotes] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [tempNotes, setTempNotes] = useState('');

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem(`notes_${courseId}_${lessonId}`);
    if (savedNotes) {
      setNotes(savedNotes);
      setTempNotes(savedNotes);
    }
  }, [courseId, lessonId]);

  // Save notes to localStorage
  const saveNotes = useCallback(async () => {
    if (!hasChanges) return;
    
    setIsSaving(true);
    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 500));
      
      localStorage.setItem(`notes_${courseId}_${lessonId}`, tempNotes);
      setNotes(tempNotes);
      setHasChanges(false);
      setIsEditing(false);
      
      // Show success message or toast here if needed
    } catch (error) {
      console.error('Failed to save notes:', error);
      // Show error message or toast here if needed
    } finally {
      setIsSaving(false);
    }
  }, [courseId, lessonId, tempNotes, hasChanges]);

  // Handle input change with debounce
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setTempNotes(newValue);
    setHasChanges(newValue !== notes);
  };

  // Toggle edit mode
  const toggleEdit = () => {
    if (isEditing && hasChanges) {
      if (window.confirm('You have unsaved changes. Discard changes?')) {
        setTempNotes(notes);
        setHasChanges(false);
        setIsEditing(false);
      }
    } else {
      setIsEditing(!isEditing);
    }
  };

  // Auto-save when component unmounts or when dependencies change
  useEffect(() => {
    return () => {
      if (hasChanges) {
        saveNotes();
      }
    };
  }, [hasChanges, saveNotes]);

  return (
    <div className="mt-6 border rounded-lg p-4 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">My Notes</h3>
        <div className="flex space-x-2">
          {isEditing ? (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleEdit}
                disabled={isSaving}
              >
                <X className="h-4 w-4 mr-1" />
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={saveNotes}
                disabled={!hasChanges || isSaving}
              >
                {isSaving ? (
                  'Saving...'
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-1" />
                    Save
                  </>
                )}
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={toggleEdit}
            >
              <Edit className="h-4 w-4 mr-1" />
              {notes ? 'Edit Notes' : 'Add Notes'}
            </Button>
          )}
        </div>
      </div>

      {isEditing ? (
        <Textarea
          value={tempNotes}
          onChange={handleChange}
          placeholder="Write your notes here..."
          className="min-h-[200px] w-full"
          autoFocus
        />
      ) : notes ? (
        <div className="whitespace-pre-wrap p-3 bg-gray-50 dark:bg-gray-700 rounded-md min-h-[200px]">
          {notes}
        </div>
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400 py-12">
          <p>No notes yet. Click 'Add Notes' to start taking notes!</p>
        </div>
      )}
      
      {hasChanges && !isEditing && (
        <div className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">
          You have unsaved changes. Click 'Edit Notes' to save them.
        </div>
      )}
    </div>
  );
};

export default Notes;
