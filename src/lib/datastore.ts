import {
  createConnection,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryColumn,
  BeforeInsert,
  Brackets,
} from "typeorm";

import { getConnection } from "typeorm/browser";

import { v4 as uuidv4 } from "uuid";

var conn = undefined;

@Entity("KeyValue")
export class KeyValue extends BaseEntity {
  @PrimaryColumn("text")
  key: string;

  @Column("text", { nullable: true })
  value: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt?: Date;
}

@Entity("Activity")
export class Activity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  type: string;

  @Column("text", { nullable: true })
  data: any;

  @Column("text", { nullable: true })
  title: any;

  @Column("text", { nullable: true })
  lat: any;

  @Column("text", { nullable: true })
  lng: any;

  @Column("simple-json", { nullable: true })
  analysis: any;

  @Column("simple-json", { nullable: true })
  mlkit: any;

  @CreateDateColumn({ name: "created_at" })
  createdAt?: Date;
}

export async function storeData(key: string, value: string) {
  var entry = await conn.getRepository(KeyValue).findOne(key);

  if (entry === undefined) {
    entry = new KeyValue();
    entry.key = key;
  }

  entry.value = value;
  await conn.manager.save(entry);
}

export async function deleteKey(key: string) {
  await conn
    .createQueryBuilder()
    .delete()
    .from(KeyValue)
    .where("key = :key", { key: key })
    .execute();
}

export async function getData(key: string) {
  return await conn.getRepository(KeyValue).findOne(key);
}

export async function recordActivity(
  type: string,
  qrData: string,
  title: string,
  lat: string,
  lng: string,
  analysis: any,
  mlkit: any
) {
  var rec = new Activity();
  rec.type = type;
  rec.data = qrData;
  rec.title = title; // used for display
  rec.lat = lat;
  rec.lng = lng;
  rec.analysis = analysis;
  rec.mlkit = mlkit;
  await conn.manager.save(rec);
}

export async function getActivity(count: number) {
  /* TODO: provide pagination in future */

  return await conn
    .getRepository(Activity)
    .createQueryBuilder("activity")
    .orderBy("activity.createdAt", "DESC")
    .take(count)
    .getMany();
}
export async function searchActivity(
  searchKey: string,
  count: number,
  skip: number
) {
  let query = await conn
    .getRepository(Activity)
    .createQueryBuilder("activity")
    .where("UPPER(activity.type) LIKE UPPER(:data)", {
      data: "%" + searchKey + "%",
    })
    .orWhere("UPPER(activity.data) LIKE UPPER(:data)", {
      data: "%" + searchKey + "%",
    })
    .orWhere("UPPER(activity.analysis) LIKE UPPER(:data)", {
      data: "%" + searchKey + "%",
    })
    .orderBy("activity.createdAt", "DESC")
    .skip(skip)
    .take(count);

  return await query.getMany();
}

export async function initDhiwayDB() {
  if (!conn) {
    try {
      conn = await getConnection();
    } catch (e) {
      conn = await createConnection({
        type: "react-native",
        database: "dhiway.sqlite",
        location: "default",
        synchronize: true,
        entities: [KeyValue, Activity],
      });
    }
  }
}
