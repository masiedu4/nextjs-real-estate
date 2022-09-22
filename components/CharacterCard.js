/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 19/09/2022 - 14:24:52
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 19/09/2022
 * - Author          : Michael
 * - Modification    :
 **/
import Image from "next/image";
import Link from "next/link";
import React from "react";

const styles = {
  card: `p-4`,
  name: "text-xs flex justify-center text-center mt-2 ",
};
const CharacterCard = ({ name, image }) => {
  return (
    <div className={styles.card}>
      <Image src={image} width={200} height={200} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default CharacterCard;
