import styled from 'styled-components'
import tags from './tags.json'

const TagEstilizada = styled.div`
    margin-top: 56px;
    margin-bottom: 39px;
    display: flex;
    gap: 24px;
    p {
        color: #D9D9D9;
        font-size: 24px;
        width: 219px;
    }
    button {
        display: flex;
        padding: 10px 8px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        border: 2px solid transparent;
        transition: background-color 0.3s ease;
        background: rgba(217, 217, 217, 0.30);
        color: #fff;
        font-size: 24px;
        cursor: pointer;
        &:hover {
            border-color: #C98CF1;
        }
    }
`

const Tags = () => {
    return (
        <TagEstilizada>
            <p>Busque por tags:</p>
            {tags.map(tag => <button key={tag.id}>{tag.titulo}</button>)}
        </TagEstilizada>
    )
}

export default Tags