import { colors } from '../config/theme/appTheme';

// Este arreglo de objetos, contiene las teclas que conforman la calculadora
//  y esta compuesto por filas, es decir, dentro de este arreglo, se encuentra otro arreglo que contiene objetos,
// este primer arreglo indica la primera fila de la calculadora, el segundo la segunda, y así sucesivamente


export const calculator = [
  [
    { name: 'C', color: colors.lightGray },
    { name: '+/-', color: colors.lightGray },
    { name: 'DEL',color: colors.lightGray },
    { name: '÷', color: colors.orange },
  ],
  [
    { name: '7', color: colors.darkGray },
    { name: '8', color: colors.darkGray },
    { name: '9', color: colors.darkGray },
    { name: 'X', color: colors.orange },
  ],
  [
    { name: '4', color: colors.darkGray },
    { name: '5', color: colors.darkGray },
    { name: '6', color: colors.darkGray },
    { name: '-', color: colors.orange },
  ],
  [
    { name: '1', color: colors.darkGray },
    { name: '2', color: colors.darkGray },
    { name: '3', color: colors.darkGray },
    { name: '+', color: colors.orange },
  ],
  [
    { name: '0', color: colors.darkGray },
    { name: '.', color: colors.darkGray },
    { name: '=', color: colors.orange },
  ]
];