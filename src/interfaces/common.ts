export type UserName = string;
export type UserId = string;
export type RoomName = string;
export type RoomId = string;
export type TableName = string;
export type TableId = string;
export type MatchId = string;
export type CurrentPage = "Top" | "Home" | "Space" | "Room" | "Table" | "Match";

export type UserData = {
  userId: UserId;
  userName: UserName;
  currentPage: CurrentPage;
  roomId: RoomId | null;
  tableId: TableId | null;
  matchId: MatchId | null;
};

export type UsersData = {
  [userId: string]: UserData;
};
