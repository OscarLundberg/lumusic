# Class: Chord

Represents a chord including multiple notes

## Implements

- `Playable`

## Table of contents

### Constructors

- [constructor](../wiki/Chord#constructor)

### Properties

- [pitches](../wiki/Chord#pitches)
- [rhythm](../wiki/Chord#rhythm)

### Methods

- [play](../wiki/Chord#play)
- [aug](../wiki/Chord#aug)
- [dim](../wiki/Chord#dim)
- [m7](../wiki/Chord#m7)
- [maj](../wiki/Chord#maj)
- [maj7](../wiki/Chord#maj7)
- [min](../wiki/Chord#min)

## Constructors

### constructor

• **new Chord**(...`pitches`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...pitches` | `InferrablePitches` |

#### Defined in

playable/chord.ts:13

## Properties

### pitches

• **pitches**: `Pitch`[]

#### Defined in

playable/chord.ts:12

___

### rhythm

• **rhythm**: `Rhythm`

#### Implementation of

Playable.rhythm

#### Defined in

playable/chord.ts:18

## Methods

### play

▸ **play**(`start`): `Note`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |

#### Returns

`Note`[]

#### Implementation of

Playable.play

#### Defined in

playable/chord.ts:19

___

### aug

▸ `Static` **aug**(`pitch`): [`Chord`](../wiki/Chord)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pitch` | `Pitch` |

#### Returns

[`Chord`](../wiki/Chord)

#### Defined in

playable/chord.ts:35

___

### dim

▸ `Static` **dim**(`pitch`): [`Chord`](../wiki/Chord)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pitch` | `Pitch` |

#### Returns

[`Chord`](../wiki/Chord)

#### Defined in

playable/chord.ts:39

___

### m7

▸ `Static` **m7**(`pitch`): [`Chord`](../wiki/Chord)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pitch` | `Pitch` |

#### Returns

[`Chord`](../wiki/Chord)

#### Defined in

playable/chord.ts:46

___

### maj

▸ `Static` **maj**(`pitch`): [`Chord`](../wiki/Chord)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pitch` | `Pitch` |

#### Returns

[`Chord`](../wiki/Chord)

#### Defined in

playable/chord.ts:28

___

### maj7

▸ `Static` **maj7**(`pitch`): [`Chord`](../wiki/Chord)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pitch` | `Pitch` |

#### Returns

[`Chord`](../wiki/Chord)

#### Defined in

playable/chord.ts:43

___

### min

▸ `Static` **min**(`pitch`): [`Chord`](../wiki/Chord)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pitch` | `Pitch` |

#### Returns

[`Chord`](../wiki/Chord)

#### Defined in

playable/chord.ts:31
