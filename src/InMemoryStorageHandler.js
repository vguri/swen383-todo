// Keeps tasks in memory only. Nothing survives a page refresh.
export class InMemoryStorageHandler {
    constructor() {
        this.tasks = [];
    }

    load() {
        return [...this.tasks];
    }

    save(tasks) {
        this.tasks = [...tasks];
    }
}