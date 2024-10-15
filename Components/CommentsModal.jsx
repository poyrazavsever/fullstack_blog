import React, { useState } from 'react';

const CommentsModal = () => {
  const [comments, setComments] = useState([
    { id: 1, text: 'Great blog post!' },
    { id: 2, text: 'Very informative, thanks for sharing!' }
  ]);

  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, text: newComment }]);
      setNewComment('');
    }
  };

  return (
    <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg p-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-2 bg-gray-100 rounded">
            {comment.text}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button
          onClick={handleAddComment}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default CommentsModal;
