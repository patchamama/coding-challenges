const codonToAminoAcid: { [codon: string]: string } = {
  "AUG": "Methionine",
  "UUU": "Phenylalanine",
  "UUC": "Phenylalanine",
  "UUA": "Leucine",
  "UUG": "Leucine",
  "UCU": "Serine",
  "UCC": "Serine",
  "UCA": "Serine",
  "UCG": "Serine",
  "UAU": "Tyrosine",
  "UAC": "Tyrosine",
  "UGU": "Cysteine",
  "UGC": "Cysteine",
  "UGG": "Tryptophan",
  "UAA": "STOP",
  "UAG": "STOP",
  "UGA": "STOP",
};


export function translate(seq: string): string[] {
  const aminoAcids: string[] = [];
  for (let i = 0; i < seq.length; i += 3) {
    const codon = seq.slice(i, i + 3);
    if (!(codon in codonToAminoAcid)) throw new Error('Invalid codon')
    const aminoAcid = codonToAminoAcid[codon];
    if (aminoAcid === "STOP") {
      break; // Terminate translation when a stop codon is encountered.
    }
    aminoAcids.push(aminoAcid);
  }
  return aminoAcids;
}

