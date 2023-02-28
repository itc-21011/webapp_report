import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Student from "App/Models/Student";

export default class extends BaseSeeder {
  public async run() {
    await Student.createMany([
      {
        name: 'ryuki',
        code: 's21016'
      },
      {
        name: 'yukitaka',
        code: 's21012'
      },
      {
        name: 'yosiya',
        code: 's21023'
      }
    ])
  }
}
