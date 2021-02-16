import * as Styled from './styles'

interface Props {
  imgURL: string;
}

export default function ContainerImage({ imgURL } : Props) {
  return (
    <Styled.Div
      imgURL={imgURL}
    ></Styled.Div>
  );
}