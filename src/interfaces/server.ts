import {
  RoomName,
  RoomId,
  UserId,
  UserName,
  TableId,
  TableName,
  MatchId,
  CurrentPage,
  UsersData,
} from "./common";

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

export type RoomData = {
  isPrivate: boolean;
  secretKey?: string;
  roomName: RoomName;
  roomId: RoomId;
  users: Array<UserId>;
  tables: Array<TableId>;
};

export type TableData = {
  roomId: RoomId;
  tableName: TableName;
  tableId: TableId;
  users: Array<UserId>;
  match: MatchId | null;
};

export type MatchData = {
  matchId: MatchId;
  roomId: RoomId;
  tableId: TableId;
  users: Array<UserId>;
};

// MemoryDB

export { UsersData };

export type RoomsData = {
  [roomId: string]: RoomData;
};

export type TablesData = {
  [tableId: string]: TableData;
};

export type MatchsData = {
  [matchId: string]: MatchData;
};

//session
export type SessionInfo = {
  userName: string;
  userId: string;
  type: "twitter" | "google" | "";
  auth: boolean;
};
