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
  [userId: string]: {
    userId: UserId;
    userName: UserName;
    currentPage: CurrentPage;
    roomId: RoomId | null;
    tableId: TableId | null;
    matchId: MatchId | null;
  };
};

export type RoomData = {
  isPrivate: boolean;
  secretKey?: string;
  roomName: RoomName;
  roomId: RoomId;
  users: Array<UserId>;
  tables: Array<TableId>;
};

export type RoomsData = {
  [rommId: string]: RoomData;
};

export type TablesData = {
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

export type MatchsData = {
  [matchId: string]: {
    matchId: MatchId;
    roomName: RoomName;
    tableName: TableName;
  };
};
