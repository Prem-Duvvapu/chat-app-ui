// data/mockChats.js
const mockChats = [
  {
    id: 'chat1',
    participants: ['u1', 'u2'],
    messages: [
      {
        id: 'm1',
        senderId: 'u1',
        text: 'Hey Bob, how have you been?',
        timestamp: '2025-07-25T08:30:00Z',
      },
      {
        id: 'm2',
        senderId: 'u2',
        text: `Hey Alice! I've been good, thanks. How about you?`,
        timestamp: '2025-07-25T08:31:00Z',
      },
      {
        id: 'm3',
        senderId: 'u1',
        text: "Doing great! Working on that React project we talked about.",
        timestamp: '2025-07-25T08:32:00Z',
      },
    ],
  },
  {
    id: 'chat2',
    participants: ['u1', 'u3'],
    messages: [
      {
        id: 'm1',
        senderId: 'u3',
        text: 'Are you joining the meeting later today?',
        timestamp: '2025-07-25T09:00:00Z',
      },
      {
        id: 'm2',
        senderId: 'u1',
        text: 'Yes, I will be there at 3pm.',
        timestamp: '2025-07-25T09:05:00Z',
      },
    ],
  },
];

export default mockChats;
