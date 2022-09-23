class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      ReadingTracker.progressNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    ReadingTracker.progressNotification(
      'There are still some books to go!',
    );
  }

  static progressNotification(message: string): void {
    console.log(message);
  }
}

const readTracker = new ReadingTracker(20);
readTracker.trackReadings(12);
readTracker.trackReadings(9);