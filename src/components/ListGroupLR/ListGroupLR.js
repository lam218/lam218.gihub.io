// @ flow
import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./ListGroupLR.css";

type Props = {
  List: [{ left: string, right: string }],
  bold?: boolean,
  lines?: boolean
};

const ListGroupLR = (props: Props) => (
  <ListGroup>
    {props.List.map((list, i) => (
      <ListGroupItem key={i}>
        <span className={props.bold ? "leftListBold" : "leftList"}>
          {list.left}
        </span>

        <span className="rightList">{list.right}</span>
        {props.List.length - 1 !== i && props.lines && <hr />}
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default ListGroupLR;
