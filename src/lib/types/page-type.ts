// Define the response type for Page
export type PageResponse = {
  id: string;
  title: string;
  content: string;
  parentId?: string | null; // parentId can be null or undefined
  parent?: PageResponse | null; // If parent exists, it will be a PageResponse, otherwise null
  children: PageResponse[]; // Array of child pages
  createdAt: string; // Date as string (ISO format)
  updatedAt: string; // Date as string (ISO format)
  userToPageMap: UserToPageMap[]; // Array of related user-to-page maps
  userToPageMapId?: string | null; // Optional, might be null or undefined
};

// If `UserToPageMap` is another model, define it too if needed.
export type UserToPageMap = {
  userId: string;
  pageId: string;
  role: string; // Example of possible fields (adjust based on your schema)
};
