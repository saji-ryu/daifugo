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
  users: Array<UserId>;
  tables: Array<TableDisplayData>;
};

export type RoomsData = {
  [rommId: string]: RoomData;
};

export type TableDisplayData = {
  isPrivate: boolean;
  tableName: TableName;
  tableId: TableId;
};

export type TableData = {
  isPrivate: boolean;
  secretKey?: string;
  roomName: RoomName;
  tableName: TableName;
  tableId: TableId;
  users: Array<UserId>;
  match: MatchId;
};

export type TablesData = {
  [tableId: string]: TableData;
};

export type MatchsData = {
  [matchId: string]: {
    matchId: MatchId;
    roomName: RoomName;
    tableName: TableName;
  };
};
