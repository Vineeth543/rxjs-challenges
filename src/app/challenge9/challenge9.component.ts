import { Component } from '@angular/core';
import { from, concatMap, of, delay, startWith, repeat } from 'rxjs';

interface Line {
  words: string[];
  duration: number;
}

const SUBTITLES = [
  {
    text: 'It had a begining',
    duration: 2000,
  },
  {
    text: 'It must have an end',
    duration: 2500,
  },
  {
    text: "Don't leave me in darkness",
    duration: 2000,
  },
  {
    text: 'Please give me your hand',
    duration: 3000,
  },
] as const;

@Component({
  selector: 'app-challenge9',
  templateUrl: './challenge9.component.html',
  styleUrls: ['./challenge9.component.less'],
})
export class Challenge9Component {
  song$ = from([{ text: '', duration: 2000 }, ...SUBTITLES]).pipe(
    concatMap(({ text, duration }, i) =>
      of(null).pipe(
        delay(duration),
        startWith([
          { duration, words: text.split(' ') },
          { duration, words: SUBTITLES[i]?.text.split(' ') },
        ])
      )
    ),
    repeat()
  );

  getDuration({ duration, words }: Line): number {
    return duration / words.length;
  }
}
