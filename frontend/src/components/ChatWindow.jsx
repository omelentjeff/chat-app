import React from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";

export default function ChatWindow({
  selectedChat,
  chatMessages,
  message,
  setMessage,
  handleSendMessage,
  connected,
  userId,
}) {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 160px)",
      }}
    >
      <Box sx={{ flexGrow: 1, overflowY: "auto", marginBottom: 2 }}>
        {selectedChat ? (
          chatMessages.map((msg) => (
            <Box
              key={msg.messageId}
              sx={{
                display: "flex",
                justifyContent:
                  msg.sender.id === userId ? "flex-end" : "flex-start",
                marginBottom: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  backgroundColor:
                    msg.sender.id === userId ? "#d1ffd6" : "#f1f0f0",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  maxWidth: "70%",
                  wordWrap: "break-word",
                  boxShadow: 1,
                }}
              >
                <strong>{msg.sender.username}:</strong> {msg.content}
                <br />
                <span
                  style={{
                    fontSize: "0.8em",
                    color: "gray",
                    display: "block",
                    textAlign: msg.sender.id === userId ? "right" : "left",
                  }}
                >
                  {new Date(msg.createdAt).toLocaleString()}
                </span>
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary">
            Select a chat to view messages.
          </Typography>
        )}
      </Box>
      <form onSubmit={handleSendMessage}>
        <TextField
          label="Type a message..."
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ marginBottom: 1 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!connected || !message.trim()}
        >
          Send
        </Button>
      </form>
    </Paper>
  );
}
