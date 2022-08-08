# Class: Phrase

Represents a set of related notes

## Implements

- `Playable`

## Table of contents

### Constructors

- [constructor](../wiki/Phrase#constructor)

### Properties

- [notes](../wiki/Phrase#notes)
- [rhythm](../wiki/Phrase#rhythm)

### Methods

- [play](../wiki/Phrase#play)

## Constructors

### constructor

• **new Phrase**(...`notes`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...notes` | `InferrablePitches` |

#### Defined in

playable/phrase.ts:13

## Properties

### notes

• **notes**: `Pitch`[]

#### Defined in

playable/phrase.ts:12

___

### rhythm

• `Optional` **rhythm**: `Rhythm`

#### Implementation of

Playable.rhythm

#### Defined in

playable/phrase.ts:11

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

playable/phrase.ts:17
