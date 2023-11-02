export class DiffieHellman {
  p: number
  g: number 
  
  constructor(p: number, g: number) {
    if (p % 2 === 0 || p % 3 === 0) {
      throw new Error('throws an error if the constructor arguments are not prime') 
    }
  
    for (let i = 5; i * i <= p; i += 6) {
      if (p % i === 0 || p % (i + 2) === 0) {
        throw new Error('throws an error if the constructor arguments are not prime') 
      }
    }

    if (p < 1) throw new Error('throws an error if the constructor arguments are out of range')
    this.p = p
    this.g = g
  }

  
  public getPublicKey(privateKey: number): number {
    let result = this.g ** privateKey % this.p
    if (privateKey === 0) throw new Error('throws an error if private key is zero') 
    if (privateKey === 1) throw new Error('throws an error if private key is one') 
    if (privateKey === this.p) throw new Error('throws an error if private key equals the modulus parameter p') 
    if (privateKey > this.p) throw new Error('throws an error if private key is greater than the modulus parameter p') 
    if (privateKey < 0) throw new Error('throws an error if private key is negative') 
    return result
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return theirPublicKey ** myPrivateKey % this.p
  }
}
