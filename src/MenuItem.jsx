import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  '& + li': {
    marginLeft: '5px'
  },
  '& button': {
    width: '60px',
    height: '30px',
    border: '1px solid #333',
    borderRadius:0,
    background: active? '#eee' : 'transparent',
    cursor: 'pointer',
  }
}));

export default MenuItem;