import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'

import URI from '../../apis/URI'
import Loading from '../shared/loading'
import ProductCard from '../shared/productcard'

import {
  setLoading,
  getAllCategories,
  getSomeProductsByCategory
} from '../../actions'

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
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}))

const CategoryAccordion = props => {
  const {
    getAllCategories,
    categories,
    loading,
    getSomeProductsByCategory,
    products
  } = props

  const history = useHistory()

  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  useEffect(() => {
    getAllCategories()
  }, [getAllCategories])

  const previewProducts = categoryId => {
    history.push(`/allproduct/${categoryId}`)
  }

  const productsHandler = id => {
    getSomeProductsByCategory(id)
  }

  return (
    <React.Fragment>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className='accordion container'>
          <div className={classes.root}>
            {categories.map((category, index) => {
              let id = category._id
              return (
                <Accordion
                  key={category._id}
                  className='accordion__main'
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1bh-content'
                    id='panel1bh-header'
                    onClick={() => {
                      productsHandler(id)
                    }}
                  >
                    <div className='accordion__category'>
                      <img
                        src={URI + '/api/category/categoryImg/' + category._id}
                        alt='category'
                      />
                      <p>عرض قائمة المنتجات</p>
                    </div>
                    <Typography className={classes.heading}></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className='randomproducts'>
                      <div className='container'>
                        <div className='randomproducts__name'>
                          <h4>
                            {category.name} قائمة أدوات
                            <i className='fas fa-chevron-left'></i>
                          </h4>
                          <p
                            className='seeall'
                            onClick={() => previewProducts(id)}
                          >
                            عرض الكل
                          </p>
                        </div>
                        <div className='randomproducts__card'>
                          <ProductCard products={products}></ProductCard>
                        </div>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

// mapStateToProps
const mapStateToProps = state => {
  return {
    loading: state.categoryReducer.loading,
    categories: state.categoryReducer.categories,
    products: state.productReducer.products
  }
}

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    setLoading: dispatch(setLoading()),
    getAllCategories: () => dispatch(getAllCategories()),
    getSomeProductsByCategory: categoryId =>
      dispatch(getSomeProductsByCategory(categoryId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAccordion)
