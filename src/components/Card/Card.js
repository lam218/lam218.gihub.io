// @flow
import * as React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  CardHeader
} from "reactstrap";

type Props = {
  imgUrl?: string,
  imgDesc?: string,
  cardTitle?: string,
  cardSubtitle?: string,
  children: React.Node,
  cardFooter?: React.Node,
  cardHeader?: React.Node,
  className?: string,
  headerClassName?: string,
  footerClassName?: string
};

const ourCard = (props: Props) => {
  return (
    <div className={props.className}>
      <Card>
        {props.imgUrl && (
          <CardImg top width="100%" src={props.imgUrl} alt={props.imgDesc} />
        )}
        {props.cardHeader && (
          <CardHeader className={props.headerClassName}>
            {props.cardHeader}
          </CardHeader>
        )}
        <CardBody>
          {props.cardTitle && <CardTitle>{props.cardTitle}</CardTitle>}
          {props.cardSubtitle && (
            <CardSubtitle>{props.cardSubtitle}</CardSubtitle>
          )}
          {props.children}
        </CardBody>
        {props.cardFooter && (
          <CardFooter className={props.footerClassName}>
            {props.cardFooter}
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default ourCard;
