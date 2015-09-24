#Conway TDD
##Writting Tests w/ Rspec

###Setup

* Create a directory called `conway-tdd`
* Inside of it run: `rspec --init`, which creates a `.rspec` file and a `spec` directory with a `spec_helper` file inside.
* Next to the `spec` directory create a lib directory. Your `lib` will contain the code you are building and your `spec` will contain your specs (tests).

*Let's say we were going to spec out a **car**. We would want to:*

* Make a new file `/spec/car_spec.rb`.
* Create a file for our code to live `/lib/car.rb`
* Require the lib into our spec by adding `require "car"` at the top of the spec.
* Write a spec
* See the tests fails
* Pass the spec!

####Example Car Spec

```ruby
require "car"

describe Car do
  let(:car) { Car.new }

  describe "::new" do
    it "creates a new instance of a Car" do
      expect(Car.new).to be_a Car
    end
  end

  describe "#speed" do
    it "gets the speed of the car" do
      expect(car.speed).to be_a Fixnum
    end
    it "defaults the speed to 0" do
      expect(car.speed).to eq 0
    end
  end

  describe "#speed=" do
    it "sets the speed of a car" do
      car.speed = 50
      expect(car.speed).to eq 50
    end
  end

  describe "#accelerate" do
    it "increases the speed of the car" do
      expect(car.accelerate(20)).to change(car, :speed).by(20)
    end
    context "reaching max speed" do
      before { car.speed = 190 }

      it "does not go over 200" do
        expect(car.accelerate(20)).to change(car, :speed).by(10)
      end
    end
  end

  describe "::all" do
    let(:first_car) { Car.new }
    let(:second_car) { Car.new }

    it "returns all instantiated cars" do
      expect(Car.all).to include first_car
      expect(Car.all).to include second_car
    end
  end

  describe "::race!" do
    let(:bmw) { Car.new }
    let(:audi) { Car.new }
    let(:mercedes) { Car.new }

    it "randomly selects a winning car" do
      expect(Car.race!).to be_a Car
    end
  end
  
end
```
###Exercise

####Conway's Game of Life

* Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
* Any live cell with more than three live neighbours dies, as if by overcrowding.
* Any live cell with two or three live neighbours lives on to the next generation.
* Any dead cell with exactly three live neighbours becomes a live cell.

[video](https://www.youtube.com/watch?t=23&v=FdMzngWchDk)
& [wiki](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

`gem install life`

`life random`

####Ping Pong Testing Guide

* Work in pairs
* Person A writes a spec
* Person B passes the spec and writes a new spec for Person A
* Person A passes that spec and writes another spec of Person B
* Continue until the time runs out when everyone will delete all code and swap partners


###Suggested Classes & Methods

**`World`**

* `::new(xSize, ySize)` — initializes a `World` (aka grid) of size x, y.
* `#cells` — returns an array of all the cells in the world.
* `#cell_at(xCord,yCord)` — returns a specific cell at coordinates x, y.
* `#tick!` — changes the state of the world according to the rules of the game.

**`Cell`**

* `::new(world, xCord, yCord, boolean)` — initializes a `Cell` belonging to a specific world, with cordinate x, cordinates y, specifying whether a cell is alive or dead.
* `#world` — returns the world it is a member of
* `#x` — returns the x coordinate
* `#y` — returns the y coordinate
* `#live?` — returns true if the cell is alive and false if not
* `#live!` — births a cell
* `#dead?` — returns true if the cell is dead and false if not
* `#die!` — kills a cell
* `#toggle` — toggles a cell's life-state
* `#neighbors` — returns all a cell's neighbors



##Helpful References

[rspec basic structure](http://rspec.info/documentation/3.3/rspec-core/)

[rspec matchers](http://rspec.info/documentation/3.3/rspec-expectations/)


