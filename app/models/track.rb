class Track < ApplicationRecord

	has_many :user_track_associations
	has_many :users, through: :user_track_associations

	has_many :user_completions

	has_many :task_type_track_associations
	has_many :tasks, through: :task_type_track_associations

	has_many :tag_associations
	has_many :tags, through: :tag_associations do
		def visible
			where("tag_associations.visible = ?", true)
		end
	end

	def completions(id)
		return UserCompletion.all.where(id: id)
	end
end
