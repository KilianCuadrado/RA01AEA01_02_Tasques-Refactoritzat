export default class Task {
  constructor(id, title, completed = false, date = new Date().toLocaleDateString('ca-ES')) {
    this.id = id
    this.title = title;
    this.completed = completed;
    this.date = date;
  }
}