// server
export type SessionInfo = {
  userName: string;
  userId: string;
  type: "twitter" | "google" | "";
  auth: boolean;
};
