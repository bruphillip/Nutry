import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";

@Injectable({
  providedIn: "root"
})
export class DatabaseProvider {
  constructor(private sqLite: SQLite) {}

  /**
   * conection
   */
  public conection() {
    return this.sqLite.create({
      name: "nutry.db",
      location: "default"
    });
  }

  public async createDb() {
    const db: SQLiteObject = await this.conection();
  }

  private async createTables(db: SQLiteObject) {
    const batch = await db.sqlBatch([
      [
        "CREATE TABLE IF NOT EXISTS `alimentos` (" +
          "`alimentoId`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
          "`nomeAlimento`	TEXT NOT NULL," +
          "`valorNutricional`	INTEGER" +
          ");"
      ]
    ]);

    if (batch) {
      console.log("Tables Created");
    } else {
      console.log("Tables not created");
    }
  }
}
