export const DNA_TRANSCRIPTION = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}

export function toRna(nucleotide: string): string {
  if (!(nucleotide in DNA_TRANSCRIPTION)) {
    return 'Invalid input DNA.'
  }

  if (nucleotide.length === 1) {
    return DNA_TRANSCRIPTION[nucleotide]
  } else {
    return nucleotide.split('').map(dna => DNA_TRANSCRIPTION[dna]).join('');
  }

}
