import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import URI from '../../apis/URI'
// import Loading from '../shared/loading'
// import RandomProducts from '../home/randomproducts'

import { setLoading, getAllCategories } from '../../actions'

//accordion
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}))

const CategoryAccordion = props => {
  const { loading, getAllCategories, categories } = props

  const classes = useStyles()

  useEffect(() => {
    getAllCategories()
  }, [getAllCategories])

  return (
    <React.Fragment>
      {/* {loading ? (
        <Loading></Loading>
      ) : ( */}
      <div className='accordion container'>
        <div className={classes.root}>
          {categories.map(category => {
            return (
              <Accordion key={category._id} className='accordion__main'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <div className='accordion__category'>
                    <img
                      src={URI + '/api/category/categoryImg/' + category._id}
                      alt='category'
                    />
                    {/* <p>عرض قائمة المنتجات</p> */}
                  </div>
                  <Typography className={classes.heading}></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {/* <RandomProducts></RandomProducts> */}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            )
          })}
        </div>
      </div>
      {/* )} */}
    </React.Fragment>
  )
}

// mapStateToProps
const mapStateToProps = state => {
  return {
    loading: state.categoryReducer.loading,
    categories: state.categoryReducer.categories
  }
}

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    setLoading: dispatch(setLoading()),
    getAllCategories: () => dispatch(getAllCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAccordion)
