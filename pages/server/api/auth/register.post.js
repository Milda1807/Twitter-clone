export default defineEventHandler(async (req, res) => {
    const bodu = await useBody(event)

    return {
        body: body
    }
    });