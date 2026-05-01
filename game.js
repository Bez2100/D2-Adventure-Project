class room1 extends AdventureScene {
    constructor() {
        super("room1", "Ahh the Co-op, it's the earthly clay beckons you...");
    }
    preload() {
        this.load.image('room1', 'assets/co-op.jpeg');
    }

    onEnter() {
        this.add.image(0, 0, 'room1').setOrigin(0).setDisplaySize(this.w * 0.75, this.h);




        let id = this.add.text(this.w * 0.1, this.w * 0.48, "student ID")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's your student ID. You've been looking for it all over.");
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the student ID.");
                this.gainItem('studentID');
                this.tweens.add({
                    targets: id,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => id.destroy()
                });
            })

        let door = this.add.text(this.w * 0.63, this.w * 0.29, "locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("studentID")) {
                    this.showMessage("You've got the student ID for this door.");
                } else {
                    this.showMessage("It's locked. Were you able to find your student ID?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("studentID")) {
                    this.loseItem("studentID");
                    this.showMessage("*squeak*");
                    door.setText("unlocked door");
                    this.gotoScene('co-op');
                }
            })

    }
}

class CoOp extends AdventureScene {
    constructor() {
        super("co-op", "Time to begin your journey, but can you find the way forward?");
    }
    preload() {
        this.load.image('co-op', 'assets/path.jpeg');

    }
    onEnter() {
        this.add.image(0, 0, 'co-op').setOrigin(0).setDisplaySize(this.w * 0.75, this.h);
        this.add.text(this.s, this.h - 3 * this.s, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('room1');
            });

        let wheel = this.add.text(this.w * 0.375, this.h * 0.5, "wheel")
            .setFontStyle('bold')
            .setInteractive()
            .setFontSize(this.s * 2)
            .on('pointerover', () => {
                if (this.hasItem("clay")) {
                    this.showMessage("You have the clay, maybe you can use it on the wheel.");
                } else {
                    this.showMessage("The wheel looks like it could be used to make something, but you don't have anything to use on it.");
                }
            })
            .on('pointerdown', () => {
                this.gotoScene('wheel');
            });
            
        this.add.text(this.w * 0.1, this.h * 0.5, "clay")
            .setFontStyle('bold')
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("I should go get some clay first.");
            })
            .on('pointerdown', () => {
                this.gotoScene('clayPiece');
            });

        this.add.text(this.w * 0.58, this.h * 0.5, "tools")
            .setFontSize(this.s * 2)
            .setFontStyle('bold')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("These look like they could help me make a piece.");
            })
            .on('pointerdown', () => {
                this.gotoScene('tools');
                });
            };

        //let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
           // .setInteractive()
            //.on('pointerover', () => {
              //  this.showMessage('*giggles*');
                //this.tweens.add({
                  //  targets: finish,
                    //x: this.s + (this.h - 2 * this.s) * Math.random(),
                    //y: this.s + (this.h - 2 * this.s) * Math.random(),
                    //ease: 'Sine.inOut',
                    //duration: 500
                //});
            //})
            //.on('pointerdown', () => this.gotoScene('outro'));
    }

class clayPiece extends AdventureScene {
    constructor() {
        super("clayPiece", "Time to wedge this darn clay!");
    }
    preload () {
        this.load.image('clayPiece', 'assets/clay.jpeg');
    }
    onEnter () {
        this.add.image(0, 0, 'clayPiece').setOrigin(0).setDisplaySize(this.w * 0.75, this.h);
        let clay = this.add.text(this.w * 0.3, this.w * 0.27, "wedge clay")
            .setFontStyle('bold')
            .setInteractive()
            .setFontSize(this.s * 2)
            .on('pointerover', () => {
                this.showMessage("You found the clay, it still needs to be wedged.");
            })
            .on('pointerdown', () => {
                this.showMessage("You wedge the clay and it's ready to be used on the wheel.");
                this.gainItem('clay');
                this.tweens.add({
                    targets: clay,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => clay.destroy()
                });
            });

        let back = this.add.text(this.s, this.h - 3 * this.s, "go back")
            .setInteractive()
            .setFontSize(this.s * 2)
            .on('pointerover', () => {
                this.showMessage("Go back to the previous room.");
            })
            .on('pointerdown', () => {
                this.gotoScene('co-op');
            });
    }
}


class tools extends AdventureScene {
    constructor() {
        super("tools", "These tools look like they could be useful?");
    }
    preload () {
        this.load.image('tools', 'assets/tool.JPEG');
    }
    onEnter() {
        this.add.image(0, 0, 'tools').setOrigin(0).setDisplaySize(this.w * 0.75, this.h);
        let toolsText = this.add.text(this.w * 0.3, this.w * 0.44, "pick up tools")
            .setInteractive()
            .setFontSize(this.s * 2)
            .setFontStyle('bold')
            .on('pointerover', () => {
                this.showMessage("Maybe you can use them to make something on the wheel.");
            })
            .on('pointerdown', () => {
                this.showMessage("Hopefully these are meant to be used on the wheel.");
                this.gainItem('tools');
                this.tweens.add({
                    targets: toolsText,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => toolsText.destroy()
                });
            });


        let back = this.add.text(this.s, this.h - 3 * this.s, "go back")
            .setInteractive()
            .setFontSize(this.s * 2)
            .on('pointerover', () => {
                this.showMessage("Go back to the previous room.");
            })
            .on('pointerdown', () => {
                this.gotoScene('co-op');
            });
    }
}


class wheel extends AdventureScene {
    constructor() {
        super("wheel", "Time to plop on the wheel and get busy! What will you make?");
    }
    preload () {
        this.load.image('wheel','assets/wheel.jpeg');
    }
    onEnter() {
        this.add.image(0, 0, 'wheel').setOrigin(0).setDisplaySize(this.w * 0.75, this.h);
        let wheel = this.add.text(this.w * 0.3, this.w * 0.33, "wheel")
            .setFontStyle('bold')
            .setInteractive()
            .setFontSize(this.s * 2)
            .setFontStyle('bold')
            .on('pointerover', () => {
                if (this.hasItem("clay") && this.hasItem("tools")) {
                    this.showMessage("You're all set to use the wheel.");
                } else {
                    this.showMessage("I think you're missing something.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("clay") && this.hasItem("tools")) {
                    this.loseItem("tools");
                    this.loseItem("clay");
                    this.gainItem("pottery");
                    this.showMessage("You made some piece of pottery?");
                    this.gotoScene('piece');
                } else {
                    this.showMessage("I think you're missing something.");
                }
            });
        let goBack = this.add.text(this.s, this.h - 3 * this.s, "go back")
            .setInteractive()
            .setFontSize(this.s * 2)
            .on('pointerover', () => {
                this.showMessage("Go back to the previous room.");
            })
            .on('pointerdown', () => {
                this.gotoScene('co-op');
            });
    }
}

class piece extends AdventureScene {
    constructor() {
        super("piece", "Congratulations! You made your own piece of pottery!");
    }
    preload () {
        this.load.image('piece','assets/piece.jpeg');
    }
    onEnter() {
        this.add.image(0, 0, 'piece').setOrigin(0).setDisplaySize(this.w * 0.75, this.h);
            let finish = this.add.text(this.w * 0.3, this.w * 0.4, '(Submit piece)')
            .setInteractive()
            .setFontSize(this.s * 2)
            .setFontStyle('bold')
            .on('pointerover', () => {
                this.showMessage("Submit your piece of pottery.");
            })
            .on('pointerdown', () => {
                this.loseItem("pottery");
                this.gotoScene('outro');
            });
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload () {
        this.load.image('intro','assets/start screen.jpeg');
        this.load.audio('music', 'assets/Aeris.mp3');
    }
    create() {
        this.sound.play('music', { loop: true });
        this.add.image(0, 0, 'intro').setOrigin(0).setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);
        const boldText = this.add.text(810,100, "Handheld!").setFontSize(60);
        this.add.text(300,200, "Your buddy god offering awaits to be made!").setFontSize(50);
        this.add.text(100,800, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('room1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    preload() {
        this.load.image('outro', 'assets/end.JPEG');
    }
    create() {
        const w = this.sys.game.config.width;
        const h = this.sys.game.config.height;
        this.add.image(0, 0, 'outro').setOrigin(0).setDisplaySize(w, h);
        this.add.text(w * 0.375, h * 0.08, "Your piece is now added to the many offerings").setFontSize(50).setOrigin(0.5, 0);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, room1, CoOp, clayPiece, tools, wheel, piece, Outro],
    title: "Adventure Game",
});

