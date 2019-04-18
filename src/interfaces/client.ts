import {
  RoomName,
  RoomId,
  UserId,
  UserName,
  TableId,
  TableName,
  MatchId,
  UserData,
} from "./common";

export type UserDisplayData = {
  userId: UserId;
  userName: UserName;
};

export type RoomDisplayData = {
  isPrivate: boolean;
  roomName: RoomName;
  roomId: RoomId;
};

export type TableDisplayData = {
  tableName: TableName;
  tableId: TableId;
  users: Array<UserDisplayData>;
};

export type ClientSpaceData = {
  rooms: Array<RoomDisplayData>;
};

export { UserData as ClientUserData };

export type ClientRoomData = {
  isPrivate: boolean;
  secretKey?: string;
  roomName: RoomName;
  roomId: RoomId;
  users: Array<UserDisplayData>;
  tables: Array<TableDisplayData>;
};

export type ClientTableData = {
  roomId: RoomId;
  tableName: TableName;
  tableId: TableId;
  users: Array<UserDisplayData>;
  match: MatchId | null;
};

export type ClientMatchData = {
  matchId: MatchId;
  roomId: RoomId;
  tableId: TableId;
  users: Array<UserDisplayData>;
};
