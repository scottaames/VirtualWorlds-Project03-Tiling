
export default class Collision {

    static checkRectangleCollision(rect1, rect2) {

        var collision, xVector, yVector, combinedHalfHeights, combinedHalfWidths

        collision = false

        //Calculate the distance vector between the sprites
        xVector = (rect1.x + rect1.width / 2) - (rect2.x + rect2.sprite.width /2);
        yVector = (rect1.y + rect1.height / 2) - (rect2.y + rect2.sprite.height / 2);

        //Figure out the combined half-widths and half-heights
        combinedHalfWidths = (rect1.sprite.width / 2) + (rect2.sprite.width / 2);
        combinedHalfHeights = (rect1.sprite.height / 2) + (rect2.sprite.height / 2);

        //Check for a collision on the x axis
        if (Math.abs(xVector) < (combinedHalfWidths) && Math.abs(yVector) < combinedHalfHeights) {
            collision = true;
            console.log("collision")
        }

        return collision;
    }
}