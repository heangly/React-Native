import * as SQLite from 'expo-sqlite'

import { Place } from '../models/place'

// create or open the database
const database = SQLite.openDatabase('places.db')

const init = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((transcationObject) => {
      transcationObject.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL
          )`,

        [], //values to pass

        () => {
          //callback if everything succeeds
          resolve()
        },

        (_, error) => {
          //callback if errors
          reject(error)
        }
      )
    })
  })

  return promise
}

const insertPlace = (place) => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((transactionObject) => {
      transactionObject.executeSql(
        ` INSERT INTO places (title, imageUri)
          VALUES (?, ?)
        `,
        [place.title, place.imageUri],

        (_, result) => {
          //callback if everything succeeds
          resolve(result)
        },

        (_, error) => {
          //callback if errors
          reject(error)
        }
      )
    })
  })

  return promise
}

const fetchPlaces = () => {
  return new Promise((resolve, reject) => {
    database.transaction((databaseObject) => {
      databaseObject.executeSql(
        `
        SELECT * FROM places
      `,
        [],
        (_, result) => {
          const places = []
          for (const dp of result.rows._array) {
            places.push(new Place(dp.id, dp.title, dp.imageUri))
          }
          resolve(places)
        },
        (_, error) => {
          reject(error)
        }
      )
    })
  })
}

export { init, insertPlace, fetchPlaces }
