export class Image {
	id: string
	name?: string
  publicId?: string
	url?: string
	mimeType?: string
	size?: number
	width?: number
	height?: number
	ThemeId?: string
  createdAt?: string

	constructor(obj: any) {
		this.id = obj?.id || null
		this.name = obj?.name || null
		this.publicId = obj?.publicId || null
		this.url = obj?.url || null
		this.mimeType = obj?.mimeType || null
		this.size = obj?.size || null
		this.width = obj?.width || null
		this.height = obj?.height || null
		this.ThemeId = obj?.ThemeId || null
		this.createdAt = obj?.createdAt || null
	}
}
