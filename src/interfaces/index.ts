// server
export type SessionInfo = {
  userName: string;
  userId: string;
  type: "twitter" | "google" | "";
  auth: boolean;
};

type UserName = string;
type UserId = string;
type RoomName = string;
type RoomId = string;
type TableName = string;
type TableId = string;
type MatchId = string;
type CurrentPage = "Top" | "Home" | "Space" | "Room" | "Table" | "Match";

export type UsersData = {
  [userId: string]: UserData;
};

export type UserDisplayData = {
  userId: UserId;
  userName: UserName;
};

export type UserData = {
  userId: UserId;
  userName: UserName;
  currentPage: CurrentPage;
  roomId: RoomId | null;
  tableId: TableId | null;
  matchId: MatchId | null;
};

export type SpaceData = {
  rooms: Array<RoomDisplayData>;
};

export type RoomDisplayData = {
  isPrivate: boolean;
  roomName: RoomName;
  roomId: RoomId;
};

export type RoomData = {
  isPrivate: boolean;
  secretKey?: string;
  roomName: RoomName;
  roomId: RoomId;
  users: Array<UserDisplayData>;
  tables: Array<TableDisplayData>;
};

export type RoomsData = {
  [rommId: string]: RoomData;
};

export type TableDisplayData = {
  tableName: TableName;
  tableId: TableId;
  users: Array<UserDisplayData>;
};

export type TableData = {
  roomId: RoomId;
  tableName: TableName;
  tableId: TableId;
  users: Array<UserDisplayData>;
  match: MatchId | null;
};

export type TablesData = {
  [tableId: string]: TableData;
};

export type MatchData = {
  matchId: MatchId;
  roomId: RoomId;
  tableId: TableId;
  users: Array<UserDisplayData>;
};

export type MatchsData = {
  [matchId: string]: MatchData;
};

export type ArgTypes = {
  isPrivate?: boolean;
  userId?: UserId;
  ownerId?: UserId;
  userName?: UserName;
  roomName?: RoomName;
  roomId?: RoomId;
  tableName?: TableName;
  tableId?: TableId;
  currentPage?: CurrentPage;
};
