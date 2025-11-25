/**
 * Interface que representa a estrutura de um Card.
 */
export interface Card {
  /** Título do card */
  title: string;
  /** Descrição do card */
  description: string;
  /** URL ou Base64 do ícone */
  icon: string;

  // O '?' serve para dizer que é opcional (caso você tenha cards antigos sem tipo)
  type?: 'image' | 'icon';
}
