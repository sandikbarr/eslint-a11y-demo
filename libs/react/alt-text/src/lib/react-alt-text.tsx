import styles from './react-alt-text.module.scss';

export interface ReactAltTextProps {
  name?: string;
}

export function ReactAltText({name = 'mushroom bob'}: ReactAltTextProps) {
  return (
    <section>
      <p>img has alt text:</p>
      <img src="/assets/mush-mush.gif" width="100" alt="squishy mushroom dance"/>
      <img src="/assets/mush-wave.gif" width="100" alt={`${name} waving arms`} />

      <p>decorative img has empty alt:</p>
      <button><img src="/assets/mush-walk.gif" width="80" alt=""/>Save</button>

      <p>input type="image":</p>
      <input type="image" src="/assets/mush-five.gif" width="100" alt="two mushrooms doing a high five"></input>
    </section>
  );
}

export default ReactAltText;
