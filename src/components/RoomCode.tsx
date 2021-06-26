import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
  code: string;
} 

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard} title="Copiar código">
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Código da sala:<br/> {props.code}</span>
    </button>
  )
}