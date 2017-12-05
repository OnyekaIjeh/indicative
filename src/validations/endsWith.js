import toPromise from '../../lib/toPromise'
import skippable from '../../lib/skippable'

export default (data, field, message, [substring], get) => {
  return toPromise(() => {
    const fieldValue = get(data, field)
    if (skippable(fieldValue)) {
      return
    }

    if (!String(fieldValue).endsWith(substring)) {
      return message
    }
  })
}
