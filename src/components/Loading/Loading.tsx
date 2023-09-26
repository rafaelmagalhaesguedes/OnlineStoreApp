/*
*  Component Loading
*/
import { Spinner, IconSpinner, TextSpinner } from './Styles';

export default function Loading() {
  return (
    <Spinner>
      <IconSpinner />
      <TextSpinner>Carregando...</TextSpinner>
    </Spinner>
  );
}
