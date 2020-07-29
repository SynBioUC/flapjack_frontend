import TagInput from '../Forms/TagInput'
import TextArea from '../Forms/TextArea'

/**
 * Maps required metadata fields
 * @param {'dna'|'chemical'|'signal'} type Field type
 */
const getFieldParams = (type) => {
  switch (type) {
    case 'dna':
      return {
        url: 'dna/',
        buttonCreateLabel: 'DNA',
        createFields: [
          {
            name: 'name',
            label: 'Name',
            showLabel: true,
            rules: [{ required: true }],
            style: { width: '100%' },
          },
          {
            name: 'sboluri',
            label: 'SBOL Uri',
            showLabel: true,
            style: { width: '100%' },
            rules: [{ type: 'url' }],
          },
        ],
      }
    case 'chemical':
      return {
        url: 'chemical/',
        buttonCreateLabel: 'chemical',
        createFields: [
          {
            name: 'names',
            label: 'Names',
            showLabel: true,
            rules: [{ required: true }],
            RenderField: TagInput,
            mode: 'tags',
            style: { width: '100%' },
          },
          {
            name: 'description',
            label: 'Description',
            showLabel: true,
            rules: [{ required: true }],
            RenderField: TextArea,
          },
        ],
      }
    case 'signal':
      return {
        url: 'signal/',
        buttonCreateLabel: 'Signal',
        createFields: [
          {
            name: 'name',
            label: 'Name',
            showLabel: true,
            rules: [{ required: true }],
          },
          {
            name: 'description',
            label: 'Description',
            showLabel: true,
            rules: [{ required: true }],
            RenderField: TextArea,
          },
        ],
      }
    default:
      return null
  }
}

export default getFieldParams
