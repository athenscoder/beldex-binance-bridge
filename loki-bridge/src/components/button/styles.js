const styles = theme => ({
  root: {
    verticalAlign: 'bottom',
    minWidth: '100px',
    minHeight: '43px',
    marginBottom: '12px',
    fontWeight: 700,
    border: '1px solid #f5bc00',
    transition: 'all 0.2s ease-in-out',
    padding: '0.8rem 2.5rem',
    lineHeight: '1.5',
    letterSpacing: '0.03em',
    fontSize: '0.8rem',
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: '#f5bc00',
      color: '#FFF'
    }
  }
});

export default styles;