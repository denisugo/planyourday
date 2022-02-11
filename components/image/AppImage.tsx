import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  display: block;
  border-radius: 10px;
  margin: 0;
  overflow: hidden;
  z-index: 10;
  mask-image: linear-gradient(
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
`;

function AppImage({ imageUri }: { imageUri: string }) {
  return (
    <StyledImage>
      <Image src={imageUri} alt="Image" layout="fill" objectFit="cover" />
    </StyledImage>
  );
}

export default AppImage;
