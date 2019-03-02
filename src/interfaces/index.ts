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

export type UserData = {
  [userId: string]: {
    userId: UserId;
    userName: UserName;
    roomId: RoomId | null;
    tableId: TableId | null;
    matchId: MatchId | null;
  };
};

export type RoomData = {
  [rommId: string]: {
    isPrivate: boolean;
    secretKey?: string;
    roomName: RoomName;
    roomId: RoomId;
    users: Array<UserId>;
    tables: Array<TableId>;
  };
};

export type TableData = {
  [tableId: string]: {
    isPrivate: boolean;
    secretKey?: string;
    roomName: RoomName;
    tableName: TableName;
    tableId: TableId;
    users: Array<UserId>;
    match: MatchId;
  };
};

export type MatchData = {
  [matchId: string]: {
    matchId: MatchId;
    roomName: RoomName;
    tableName: TableName;
  };
};
