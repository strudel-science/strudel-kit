import React, { useEffect, useState, useRef } from 'react';
import {
  IconButton,
  Tooltip,
  TextField,
  Button,
  Stack,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ReplyIcon from '@mui/icons-material/Reply';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PopupModal from './PopupModal';

function formatDateTime(timestamp?: number): string {
  if (timestamp === undefined) return 'unknown';
  if (timestamp === -1) return 'unknown';
  if (timestamp > 1e12) {
    timestamp = Math.floor(timestamp / 1000); // Convert milliseconds to seconds
  }
  // Convert the timestamp to milliseconds (UNIX timestamps are in seconds)
  const date = new Date(timestamp * 1000);

  // Options for formatting the date
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };

  // Format the date using Intl.DateTimeFormat
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

interface IndividualNoteProps {
  notes: Note[];
  note: Note;
  idx: number;
  editMode?: boolean;
  handleClickAction: (
    idx: number,
    action: string,
    newText?: string,
    event?: React.MouseEvent<HTMLButtonElement>
  ) => void;
  userEmail: string;
  replyToIdx?: number;
  editIdx?: number;
  childOfResolved?: boolean;
}

const IndividualNote = ({
  notes,
  note,
  idx,
  editMode,
  handleClickAction,
  userEmail,
  replyToIdx,
  editIdx,
  childOfResolved,
}: IndividualNoteProps) => {
  const [newText, setNewText] = useState<string>(note.text);
  const [disableSaveEdit, setDisableSaveEdit] = useState(false);
  const [replyText, setReplyText] = useState('');
  if (note.deleted) return null;
  const styles = {
    outerDiv: {
      backgroundColor: note.resolved || childOfResolved ? '#F5F5F6' : undefined,
    },
    innerDiv: {
      paddingX: 1,
      paddingY: 1,
      paddingBottom: 1,
      marginLeft: note?.isReply ? 4 : 0,
      borderRadius: 1, // Rounded corners
    },
    metadata: {
      opacity: 0.9,
      fontSize: '13px',
    },
    icon: {
      fontSize: '14px',
      color: 'black',
    },
    indentedDivider: {
      paddingLeft: '24px',
    },
    resolvedTypography: {
      paddingX: 1,
      paddingY: 1,
      paddingBottom: 1,
      marginLeft: 4,
      borderRadius: 1, // Rounded corners
    },
    textfield: {
      '& .MuiOutlinedInput-root': {
        // Default border
        '& fieldset': {
          borderWidth: '1px',
          borderColor: 'black',
        },
        // On hover
        '&:hover fieldset': {
          borderWidth: '1.5px',
        },
        // On focus
        '&.Mui-focused fieldset': {
          borderWidth: '2px',
          borderColor: 'black',
        },
      },
    },
    replyDiv: {
      marginLeft: '32px',
      marginTop: '8px',
    },
  };

  const clickCancel = () => {
    setReplyText('');
    handleClickAction(idx, 'reply');
  };

  const clickSubmit = () => {
    handleClickAction(idx, 'submit reply', replyText);
    setReplyText('');
  };

  const handleUpdateText = (e: any) => {
    let newValue = e.target.value;
    setNewText(newValue);
    if (newValue === '') setDisableSaveEdit(true);
    else setDisableSaveEdit(false);
  };
  return (
    <div style={styles.outerDiv}>
      <div style={note?.isReply ? styles.indentedDivider : undefined}>
        <Divider />
      </div>
      <Typography component={'div'} sx={styles.innerDiv}>
        <div>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems="start"
          >
            <div style={{ maxWidth: '70%' }}>
              {editMode ? (
                <TextField
                  fullWidth
                  variant="standard"
                  defaultValue={note.text}
                  multiline
                  onChange={handleUpdateText}
                />
              ) : (
                <Typography>{note.text}</Typography>
              )}
            </div>

            <Stack direction="row">
              {note.resolved ? (
                <div>
                  <Tooltip title="reopen">
                    <IconButton
                      onClick={(e) =>
                        handleClickAction(idx, 'resolve', undefined, e)
                      }
                    >
                      <AutorenewIcon sx={styles.icon} />
                    </IconButton>
                  </Tooltip>
                </div>
              ) : (
                !childOfResolved && (
                  <div>
                    {note.creator === userEmail && (
                      <Tooltip title="edit">
                        <IconButton
                          disabled={disableSaveEdit}
                          onClick={() =>
                            handleClickAction(idx, 'edit', newText)
                          }
                        >
                          {editMode ? (
                            <DoneAllIcon sx={styles.icon} />
                          ) : (
                            <EditIcon sx={styles.icon} />
                          )}
                        </IconButton>
                      </Tooltip>
                    )}
                    {!note.isReply && (
                      <Tooltip title="resolve">
                        <IconButton
                          disabled={editMode}
                          onClick={() => handleClickAction(idx, 'resolve')}
                        >
                          <CheckIcon sx={styles.icon} />
                        </IconButton>
                      </Tooltip>
                    )}
                    {!note.isReply && (
                      <Tooltip title="reply">
                        <IconButton
                          disabled={editMode}
                          onClick={() => handleClickAction(idx, 'reply')}
                        >
                          <ReplyIcon sx={styles.icon} />
                        </IconButton>
                      </Tooltip>
                    )}
                    {note.creator === userEmail && (
                      <Tooltip title="delete">
                        <IconButton
                          disabled={editMode}
                          onClick={() => handleClickAction(idx, 'delete')}
                        >
                          <DeleteIcon sx={styles.icon} />
                        </IconButton>
                      </Tooltip>
                    )}
                  </div>
                )
              )}
            </Stack>
          </Stack>
          <Tooltip
            title={`last updated on ${formatDateTime(note.lastUpdated || -1)}`}
            enterDelay={1000}
          >
            <Typography sx={styles.metadata}>
              - <i>{note.creator || 'unknown'}</i>,{' '}
              {formatDateTime(note.timestamp || -1)}
            </Typography>
          </Tooltip>
        </div>
      </Typography>

      {note.replies &&
        note.replies.map((replyIdx) => {
          return (
            <IndividualNote
              notes={notes}
              key={replyIdx}
              note={notes[replyIdx]}
              idx={replyIdx}
              editMode={editIdx === replyIdx}
              handleClickAction={handleClickAction}
              userEmail={userEmail}
              replyToIdx={replyToIdx}
              editIdx={editIdx}
              childOfResolved={note.resolved}
            />
          );
        })}
      {note.resolved && (
        <div>
          <div style={styles.indentedDivider}>
            <Divider />
          </div>
          <Typography component={'div'} sx={styles.resolvedTypography}>
            <i style={styles.metadata}>
              Resolved by {note.lastUpdatedUser || 'unknown'},{' '}
              {formatDateTime(note.lastUpdated || -1)}
            </i>
          </Typography>
        </div>
      )}
      {replyToIdx === idx && (
        <div style={styles.replyDiv}>
          <TextField
            id="reply-textfield"
            fullWidth
            required
            variant="outlined"
            placeholder="Reply to note..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            sx={styles.textfield}
          />
          <Stack direction={'row'} justifyContent={'space-between'}>
            <div></div>
            <div style={{ padding: '8px' }}>
              <Button onClick={clickCancel}>Cancel</Button>
              <Button
                variant="contained"
                onClick={clickSubmit}
                disabled={replyText === ''}
              >
                Reply
              </Button>
            </div>
          </Stack>
        </div>
      )}
    </div>
  );
};

interface NotesDialogProps {
  record_id?: string;
  open: boolean;
  userEmail: string;
  initialNotes: Note[];
  onClose?: (
    record_id?: string,
    newNotes?: Note[],
    submitted?: boolean
  ) => void;
  onUpdateNote?: (
    updateType: string,
    index: number,
    text?: string,
    isReply?: boolean
  ) => void;
}

interface Note {
  text: string;
  record_id: string;
  isReply: boolean;
  resolved: boolean;
  timestamp: number;
  deleted?: boolean;
  creator?: string;
  lastUpdated?: number;
  lastUpdatedUser?: string;
  replies?: number[]; // list of indexes of notes that reply to this guy
  repliesTo?: number; // the index that this comment replies to, if this is a reply
}

const NotesDialog = ({
  record_id,
  open,
  userEmail,
  initialNotes,
  onUpdateNote,
}: NotesDialogProps) => {
  const [notes, setNotes] = useState([] as Note[]);
  const [replyToIdx, setReplyToIdx] = useState<number>();
  const [editIdx, setEditIdx] = useState<number>();
  const [deleteIdx, setDeleteIdx] = useState<number>();
  const [newNoteText, setNewNoteText] = useState('');
  const [disableButton, setDisableButton] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showResolved, setShowResolved] = useState(false);
  const descriptionElementRef = useRef<HTMLDivElement | null>(null);

  const reset = (newNotes?: Note[]) => {
    setReplyToIdx(undefined);
    setEditIdx(undefined);
    setDeleteIdx(undefined);
    setNewNoteText('');
    setDisableButton(false);
    setLoading(false);
    if (newNotes === undefined) setNotes([]);
    else setNotes(newNotes);
  };

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
      if (initialNotes !== undefined) {
        setNotes(initialNotes);
        setLoading(false);
      }
    } else reset();
  }, [open, initialNotes]);

  const handleSuccessfulNoteUpdate = (data: Note[]) => {
    reset(data);
  };

  const handleUpdateRecordNotes = (
    updateType: string,
    index: number,
    text?: string,
    isReply?: boolean
  ) => {
    // If update function was provided, call that
    if (onUpdateNote) onUpdateNote(updateType, index, text, isReply);
    // update the note in javascript
    else {
      let tempNotes = [...notes];
      if (updateType === 'add') {
        const newNote: Note = {
          text: text || '',
          record_id: record_id || '',
          timestamp: Date.now(),
          creator: userEmail,
          resolved: false,
          deleted: false,
          lastUpdated: Date.now(),
          replies: [],
          isReply: isReply || false,
          lastUpdatedUser: userEmail,
        };
        if (isReply) {
          newNote.repliesTo = replyToIdx;
          if (replyToIdx !== undefined)
            tempNotes[replyToIdx].replies?.push(index);
        }
        // add note
        tempNotes.push(newNote);
      } else if (updateType === 'edit') {
        let editedNote = tempNotes[index];
        editedNote.text = text || '';
        editedNote.lastUpdated = Date.now();
        editedNote.lastUpdatedUser = userEmail;
      } else if (updateType === 'resolve' || updateType === 'unresolve') {
        let resolvedNote = tempNotes[index];
        resolvedNote.resolved = !resolvedNote.resolved;
        resolvedNote.lastUpdated = Date.now();
        resolvedNote.lastUpdatedUser = userEmail;
      } else if (updateType === 'delete') {
        let deletedNote = tempNotes[index];
        deletedNote.deleted = true;
        deletedNote.lastUpdated = Date.now();
        deletedNote.lastUpdatedUser = userEmail;
      }
      handleSuccessfulNoteUpdate(tempNotes);
    }
  };

  const styles = {
    dialogPaper: {
      display: 'flex',
      flexDirection: 'column',
    },
    dialogContent: {
      flex: 1, // Make content area take up available vertical space
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // Ensure bottom section stays at the bottom
    },
    boxTop: {
      overflow: 'scroll',
      maxHeight: '25vh',
    },
    boxBottom: {
      marginTop: 2,
    },
    replyToText: {
      opacity: 0.5,
      fontStyle: 'italic',
      overflow: 'hidden',
      margin: 0,
    },
    textfield: {
      '& .MuiOutlinedInput-root': {
        // Default border
        '& fieldset': {
          borderWidth: '1px',
          borderColor: 'black',
        },
        // On hover
        '&:hover fieldset': {
          borderWidth: '1.5px',
          borderColor: 'black',
        },
        // On focus
        '&.Mui-focused fieldset': {
          borderWidth: '2px',
          borderColor: 'black',
        },
      },
    },
    resolvedCommentsDiv: {
      backgroundColor: '#E7E7E7',
      borderRadius: '2px',
    },
    resolvedCommentsText: {
      // opacity: 0.6,
      fontSize: '13px',
      fontWeight: 'bold',
      paddingLeft: '8px',
    },
    icon: {
      fontSize: '14px',
      color: 'black',
    },
  };

  const handleAddNote = () => {
    handleUpdateRecordNotes('add', notes.length, newNoteText);
  };

  const handleEditNote = (idx: number, newValue: string) => {
    handleUpdateRecordNotes('edit', idx, newValue);
  };

  const handleResolveNote = (idx: number) => {
    if (notes[idx].resolved) handleUpdateRecordNotes('unresolve', idx);
    else handleUpdateRecordNotes('resolve', idx);
  };

  const handleDeleteNote = () => {
    if (deleteIdx !== undefined) handleUpdateRecordNotes('delete', deleteIdx);
  };

  const handleClickAction = (
    idx: number,
    action: string,
    newValue?: string
  ) => {
    if (action === 'edit') {
      if (editIdx === idx) {
        handleEditNote(idx, newValue || '');
      } else setEditIdx(idx);
    } else if (action === 'reply') {
      if (replyToIdx === idx) setReplyToIdx(undefined);
      else {
        setTimeout(() => {
          document.getElementById('reply-textfield')?.focus();
        }, 0);

        setReplyToIdx(idx);
      }
    } else if (action === 'resolve') {
      handleResolveNote(idx);
    } else if (action === 'delete') {
      setDeleteIdx(idx);
    } else if (action === 'submit reply') {
      handleUpdateRecordNotes('add', notes.length, newValue, true);
    }
  };

  const checkForResolved = () => {
    for (let note of notes) {
      if (note.resolved) return true;
    }
    return false;
  };

  return (
    <Box sx={styles.dialogPaper}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Notes</Typography>
      </Stack>
      <Box sx={styles.dialogContent}>
        {/* Top content */}
        <Box sx={styles.boxTop}>
          {!loading &&
            notes.map((note, idx) => {
              if (!note.isReply && !note.deleted && !note.resolved) {
                return (
                  <div key={note.timestamp}>
                    <IndividualNote
                      notes={notes}
                      note={note}
                      idx={idx}
                      editMode={editIdx === idx}
                      handleClickAction={handleClickAction}
                      userEmail={userEmail}
                      replyToIdx={replyToIdx}
                      editIdx={editIdx}
                    />
                  </div>
                );
              }
            })}
          {!loading && checkForResolved() && (
            <div style={styles.resolvedCommentsDiv}>
              <div>
                <Divider sx={{ marginBottom: 1 }} />
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems="start"
                >
                  <Typography sx={styles.resolvedCommentsText}>
                    Resolved comments
                  </Typography>
                  <Tooltip title="show resolved comment">
                    <IconButton onClick={() => setShowResolved(!showResolved)}>
                      {showResolved ? (
                        <KeyboardArrowUpIcon sx={styles.icon} />
                      ) : (
                        <KeyboardArrowDownIcon sx={styles.icon} />
                      )}
                    </IconButton>
                  </Tooltip>
                </Stack>
              </div>
              {showResolved &&
                notes.map((note, idx) => {
                  if (note.resolved) {
                    return (
                      <div key={note.timestamp}>
                        <IndividualNote
                          notes={notes}
                          note={note}
                          idx={idx}
                          editMode={editIdx === idx}
                          handleClickAction={handleClickAction}
                          userEmail={userEmail}
                          replyToIdx={replyToIdx}
                          editIdx={editIdx}
                        />
                      </div>
                    );
                  }
                })}
            </div>
          )}

          <Divider />

          {loading ? (
            <p style={{ color: 'grey' }}>loading...</p>
          ) : (
            notes.length === 0 && (
              <p style={{ color: 'grey' }}>No notes added yet</p>
            )
          )}
        </Box>

        {/* Bottom section */}
        <Box sx={styles.boxBottom}>
          <TextField
            id="new-note-textfield"
            fullWidth
            required
            variant="outlined"
            placeholder="Type in a new note"
            value={newNoteText}
            onChange={(e) => setNewNoteText(e.target.value)}
            multiline
            minRows={2}
            disabled={disableButton}
            sx={styles.textfield}
          />
          <Box display="flex" justifyContent="space-between" mt={1}>
            <Typography noWrap paragraph sx={styles.replyToText}></Typography>
            <Button
              variant="contained"
              onClick={handleAddNote}
              disabled={newNoteText === '' || disableButton}
            >
              Add new note
            </Button>
          </Box>
        </Box>
        <PopupModal
          open={deleteIdx !== undefined}
          handleClose={() => setDeleteIdx(undefined)}
          text="Are you sure you want to delete this comment?"
          handleSave={handleDeleteNote}
          buttonText="Delete"
          buttonColor="error"
          buttonVariant="contained"
          width={400}
        />
      </Box>
    </Box>
  );
};

export default NotesDialog;
