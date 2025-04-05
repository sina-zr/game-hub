import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }: { score: number }) => {
  let color = "green";
  if (score < 75) {
    color = "yellow";
  } else if (score < 50) {
    color = "red";
  }
  return (
    <Badge color={color} fontSize="14px" paddingX="5px" borderRadius="5px">
      {score}
    </Badge>
  );
};

export default CriticScore;
