import { Chord } from "./playable/chord";
import { Interval } from "./interval";
import { Note } from "./note";
import { NoteName } from "./note-name";
import { Pitch } from "./pitch";

export type Octave = number | "Inferred";
export type InferrablePitches = Pitch[] | [Pitch, ...Interval[]]
export type InferrableChords = Chord[];
export type Ran<T extends number> = number extends T ? number : _Range<T, []>;
export type _Range<T extends number, R extends unknown[]> = R['length'] extends T ? R[number] : _Range<T, [R['length'], ...R]>;
export type Byte = Ran<256>;
export type Nybble = Ran<16>;

export function notesToMidi(...notes: Note[]): number[] {
  /// infer octaves if not present
  const root = notes[0];
  return notes.map(n => n.pitch.midi);
}

export function transpose(root: NoteName, steps: number): [note: NoteName, octaveDelta: number] {
  let res = root + steps;
  let octaveDelta = 0;
  if (res > NoteName.B) {
    res = res - 12;
    octaveDelta = 1;
  } else if (res < NoteName.C) {
    res = res + 12;
    octaveDelta = -1;
  }
  return [res, octaveDelta];
}

export function isValidByte(n: number): n is Byte {
  if (n < 0 || n > 255)
    return false;
  return true;
}

export function infer(pitches: InferrablePitches): Pitch[] {
  const root = pitches[0];
  return pitches.map(p => {
    if (isValidPitch(p)) {
      return p;
    } else {
      return root.interval(p);
    }
  });
}


export function isValidPitch(p: Pitch | Interval): p is Pitch {
  return typeof p === "object";
}

